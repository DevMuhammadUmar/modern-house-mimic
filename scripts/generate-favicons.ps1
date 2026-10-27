Add-Type -AssemblyName System.Drawing

function Resize-Png {
    param(
        [string]$sourcePath,
        [string]$destPath,
        [int]$width,
        [int]$height
    )
    $src = [System.Drawing.Image]::FromFile($sourcePath)
    $dest = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($dest)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.DrawImage($src, 0, 0, $width, $height)
    $dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Host "Created $destPath ($width x $height)"
}

$publicDir = Join-Path $PSScriptRoot "..\public"
$srcImage = Join-Path $publicDir "favicon.png"

Resize-Png -sourcePath $srcImage -destPath (Join-Path $publicDir "favicon-48x48.png") -width 48 -height 48
Resize-Png -sourcePath $srcImage -destPath (Join-Path $publicDir "favicon-96x96.png") -width 96 -height 96
