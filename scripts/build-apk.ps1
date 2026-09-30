$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
Set-Location $projectRoot
if (!$env:JAVA_HOME) { $env:JAVA_HOME = 'C:\Program Files\Android\Android Studio\jbr' }
if (!$env:ANDROID_HOME) { $env:ANDROID_HOME = Join-Path $env:LOCALAPPDATA 'Android\Sdk' }
if (!(Test-Path (Join-Path $env:JAVA_HOME 'bin\java.exe'))) { throw 'Configura JAVA_HOME con un JDK 21.' }
if (!(Test-Path $env:ANDROID_HOME)) { throw 'Configura ANDROID_HOME con el SDK Android.' }
$env:NODE_ENV = 'production'
node scripts/assets.cjs
if ($LASTEXITCODE -ne 0) { throw 'No se pudieron generar los iconos.' }
npx expo prebuild --platform android --no-install
if ($LASTEXITCODE -ne 0) { throw 'Expo prebuild fallo.' }
Push-Location android
try {
  .\gradlew.bat assembleRelease '-PreactNativeArchitectures=arm64-v8a,x86_64' '-Dorg.gradle.jvmargs=-Xmx3072m -XX:MaxMetaspaceSize=1536m' '-Pkotlin.compiler.execution.strategy=in-process' --max-workers=2 --console=plain
  if ($LASTEXITCODE -ne 0) { throw 'La compilacion de Android fallo.' }
} finally { Pop-Location }
New-Item -ItemType Directory -Force entregables | Out-Null
Copy-Item -LiteralPath android/app/build/outputs/apk/release/app-release.apk -Destination entregables/MewtwoLab-1.0.0.apk
Get-FileHash entregables/MewtwoLab-1.0.0.apk -Algorithm SHA256
