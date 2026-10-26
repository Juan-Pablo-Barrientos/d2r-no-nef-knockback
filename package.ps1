# Builds dist\NoNefKnockback.zip with the NoNefKnockback mod folder at the top.
$ErrorActionPreference = "Stop"

$root = $PSScriptRoot
$dist = Join-Path $root "dist"
Remove-Item -Recurse -Force $dist -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $dist | Out-Null
Compress-Archive -Path "$root\NoNefKnockback" -DestinationPath "$dist\NoNefKnockback.zip"
Write-Host "Built $dist\NoNefKnockback.zip"
