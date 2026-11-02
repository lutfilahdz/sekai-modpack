# Contributing

Thanks for contributing to SEKAI Modpack! Keep each pull request focused on one change and explain how you tested it.

## Getting started

Install [Git](https://git-scm.com/) and [packwiz](https://packwiz.infra.link/installation/). Use a separate Minecraft instance for testing; the repository stores pack sources and metadata.

1. Fork this repository on GitHub.
2. Clone your fork and create a branch from `dev`:

    ```bash
    git clone https://github.com/YOUR_USERNAME/sekai-modpack.git
    cd sekai-modpack
    git switch dev
    git switch -c fix/describe-your-change
    ```

3. Check `pack/pack.toml` for the Minecraft and NeoForge versions to use when testing.

## Repository layout

| Path                  | Purpose                                                        |
| --------------------- | -------------------------------------------------------------- |
| `pack/pack.toml`      | Pack identity, Minecraft/loader versions, and packwiz options. |
| `pack/index.toml`     | File index maintained by packwiz.                              |
| `pack/mods/*.pw.toml` | Mod download and update metadata.                              |
| `pack/config/`        | Shared configs and metadata for side-specific configs.         |
| `pack/kubejs/`        | KubeJS scripts and resources.                                  |
| `pack/client-files/`  | Source files intended for clients.                             |
| `pack/server-files/`  | Source files intended for dedicated servers.                   |
| `instance/`           | Files packaged into `instance.zip`.                            |
| `build.sh`            | Vercel build script.                                           |
| `public/`             | Generated deployment output; do not commit.                    |

## Changing mods, configs, or scripts

Run packwiz commands from `pack/`:

```bash
cd pack
```

To add a mod, use its project URL:

```bash
packwiz modrinth install <project-url>
# Or:
packwiz curseforge install <project-url>
```

To update or remove a mod:

```bash
packwiz update <mod-name>
packwiz remove <mod-name>
```

Replace the placeholders with the relevant project or mod. Review the selected version, dependencies, and `side` in the resulting metadata. Avoid updating unrelated mods in the same PR.

Edit shared configs in `pack/config/` and scripts in `pack/kubejs/`. After making changes, refresh the index:

```bash
packwiz refresh
```

Commit the relevant source and metadata changes, including `index.toml` or `pack.toml` when changed by packwiz. Do not manually resolve index hashes; resolve the source changes first, then run `packwiz refresh` again.

## Client-only and server-only files

Ordinary internal files do not support a `side` setting. This project uses `.pw.toml` metadata pointing to its own hosted files to select the appropriate side.

For a new side-specific file:

1. Place the source under `pack/client-files/` or `pack/server-files/`.
2. Create a `.pw.toml` beside the intended destination, following the existing metadata files.
3. Set `filename` to the destination filename and `side` to `client` or `server`.
4. Set `[download].url` to the hosted source file and record its SHA-512 hash.
5. Run `packwiz refresh`.

For example, `pack/config/reliable_remover/client-removal-json.pw.toml` points to `pack/client-files/config/reliable_remover/removals.json`, with `filename = "removals.json"` and `side = "client"`.

The source directories are excluded from the pack index by `pack/.packwizignore`, but are still copied into the deployment. Keep those exclusions in place.

**Whenever you edit a referenced source file, update its metadata's `[download].hash` too.** The build script does not calculate these download hashes.

From the repository root, calculate a hash using either command:

```bash
# Linux / WSL
sha512sum pack/client-files/config/reliable_remover/removals.json
```

```powershell
# Windows PowerShell
(Get-FileHash "pack/client-files/config/reliable_remover/removals.json" -Algorithm SHA512).Hash.ToLowerInvariant()
```

Use the resulting value for `hash` and keep `hash-format = "sha512"`. Hash the local file, since the hosted URL may still serve the previous version. Preserve the repository's `.gitattributes` settings so Git does not change file bytes through line-ending conversion.

## Testing and opening a PR

Test the affected behavior using the pack's Minecraft and NeoForge versions. For side-specific changes, test the relevant client or dedicated server. When changing a hosted file, test with your local edited copy; the production URL will not contain your unmerged changes.

Before committing, return to the repository root and review:

```bash
git status
git diff
```

Stage only the intended source changes. Exclude generated `public/` output, exported archives, logs, and test worlds.

## Commit messages

Start every commit message with a capitalized verb describing the change. Keep the first line short and specific.

| Verb        | When to use                               | Example                                                 |
| ----------- | ----------------------------------------- | ------------------------------------------------------- |
| `Add`       | Introduce something new.                  | `Add Chipped mod`                                       |
| `Remove`    | Remove something existing.                | `Remove Copper Age Backport`                            |
| `Replace`   | Swap one thing for another.               | `Replace Food Variations with Dynamic Nutrition`        |
| `Update`    | Upgrade to a newer version.               | `Update Item Descriptions to 2.8.0`                     |
| `Downgrade` | Roll back to an older version.            | `Downgrade JEI to 19.64.0.455`                          |
| `Fix`       | Fix something that is broken.             | `Fix Copycats using Glass not connecting properly`      |
| `Enable`    | Turn on a feature or config option.       | `Enable voice chat proximity mode`                      |
| `Disable`   | Turn off a feature or config option.      | `Disable Item Descriptions on Jade tooltip`             |
| `Configure` | Set up or change config files or options. | `Configure ServerCore mob cap limits`                   |
| `Bump`      | Increment a version number.               | `Bump pack version to 1.1.0`                            |
| `Refactor`  | Restructure without changing behavior.    | `Refactor build script to handle dynamic URL rewriting` |
| `Merge`     | Combine multiple things into one.         | `Merge Reliable Remover configs into one`               |
| `Revert`    | Undo a previous commit.                   | `Revert "Add Drive-By-Sable mod"`                       |

For bulk mod updates, list each mod and its version range after the summary:

```
Update 5 mods
- ModernFix to 5.27.27
- Simple Voice Chat to 2.6.26
- ...
```

When a change needs extra context (reason, side effects, workaround), add it after the first line separated by a blank line:

```
Downgrade JEI to 19.64.0.455
JEI 19.70.0.460 crashes when joining a world (VerifyError in
SmithingCategoryExtension.setOutput). Pinned until fixed.
```

Push your branch and open a pull request targeting **`dev`**. Include:

- What changed and why.
- For mod changes, the project link and relevant versions.
- How you tested it, including client/server coverage where applicable.
- Any known issues or testing you could not complete.

## Build and hash workflow

The contribution workflow is intended to use this setting in `pack/pack.toml`:

```toml
[options]
no-internal-hashes = true
```

If it has not been enabled yet, maintainers should add it and commit a normal `packwiz refresh` as a separate setup change. Add the property to an existing `[options]` section if one exists.

With this mode enabled, contributors use ordinary `packwiz refresh`. File additions and removals still change the index, but edits no longer require internal file-hash changes in Git. Download hashes inside `.pw.toml` remain necessary.

Vercel runs `bash build.sh` from the repository root and publishes `public/`. The script copies `pack/`, runs `packwiz refresh --build` on that copy, and creates `instance.zip` from `instance/`. Full internal hashes belong in the build output; do not commit that output back to the source branch.
