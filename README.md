# No Nef Knockback

A [D2RMM](https://github.com/olegbl/d2rmm) mod for Diablo II: Resurrected that
removes knockback from the Nef rune in weapons. Black no longer knocks
monsters away and keeps all its other stats.

## What changes

The Black runeword gets its knockback only from its Nef rune. This mod removes
knockback from Nef's weapon bonus, so it also changes:

- **Melody** (bows) and **Obsession** (staves), the other weapon runewords with
  Nef. They lose knockback too.
- **Nef in any weapon.** It no longer gives knockback.

Nef in helms, armor and shields still gives +30 Defense vs. Missile.

Items you already have change too. The game reads rune bonuses from its data
each time it loads, so you don't need to remake them.

## Install

1. Download `NoNefKnockback.zip` from the [latest release](../../releases/latest)
   and put the `NoNefKnockback` folder in D2RMM's `mods` folder.
2. In D2RMM, enable **No Nef Knockback** and click **Install Mods**.

To check it works, hover over a Nef rune in game. It shows no "Weapons:" line.

Tested with D2RMM Custom 2.0.2, D2RLoader 1.3.1-beta and Diablo II:
Resurrected 3.3.93847.

## Build a release

```powershell
.\package.ps1
```

This writes `dist\NoNefKnockback.zip`.

## License

MIT. See [LICENSE](LICENSE).
