/**
 * LinkBridge Central Configuration
 * All editable brand details, URLs, version numbers, and system requirements
 * MUST be maintained here. Do not hardcode these in individual components.
 */

export interface SystemRequirement {
  os: string;
  architecture?: string;
  notes: string;
}

export interface PlatformDownload {
  name: string;
  tagline: string;
  filename: string;
  version: string;
  architecture?: string;
  minOS: string;
  downloadUrl: string;
  badge: string;
  primary?: boolean;
}

export interface BrandConfig {
  appName: string;
  tagline: string;
  version: string;
  developer: {
    name: string;
    email: string;
    githubUsername: string;
    githubProfileUrl: string;
  };
  repository: {
    url: string;
    releasesUrl: string;
    latestReleaseUrl: string;
    issuesUrl: string;
    discussionsUrl: string;
    licenseUrl: string;
    securityModelUrl: string;
    licenseName: string;
  };
  attribution: {
    sentence: string;
    nectarlinkUrl: string;
  };
  downloads: {
    windows: PlatformDownload;
    android: PlatformDownload;
  };
}

export const CONFIG: BrandConfig = {
  appName: "LinkBridge",
  tagline: "Connect Beyond Limits",
  version: "v1.0.0",
  developer: {
    name: "Krushna B Malusare",
    email: "malusarekrishnab@gmail.com",
    githubUsername: "malusarekrishnab-cyber",
    githubProfileUrl: "https://github.com/malusarekrishnab-cyber",
  },
  repository: {
    url: "https://github.com/malusarekrishnab-cyber/Link-Bridge",
    releasesUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/releases",
    latestReleaseUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/releases/latest",
    issuesUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/issues",
    discussionsUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/discussions",
    licenseUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/blob/main/LICENSE",
    securityModelUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/blob/main/docs/technical/security-model.md",
    licenseName: "GPL-3.0-or-later",
  },
  attribution: {
    sentence: "LinkBridge by Krushna B Malusare. Based on the open-source NectarLink by thtbee. Adds the Obsidian Cyan and Midnight Purple themes.",
    nectarlinkUrl: "https://github.com/thtbee/nectarlink",
  },
  downloads: {
    windows: {
      name: "Windows Desktop",
      tagline: "Native 64-bit client for Windows 10 & 11",
      filename: "LinkBridge-Windows-Setup.exe",
      version: "v1.0.0",
      architecture: "x64 Intel/AMD",
      minOS: "Windows 10 (2004+) or Windows 11",
      downloadUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/releases/download/v1.0.0/LinkBridge-Windows-Setup.exe",
      badge: "64-bit Setup .exe",
      primary: true,
    },
    android: {
      name: "Android Mobile",
      tagline: "Native Jetpack Compose companion app",
      filename: "LinkBridge-Android.apk",
      version: "v1.0.0",
      minOS: "Android 8.0 (API 26) or newer",
      downloadUrl: "https://github.com/malusarekrishnab-cyber/Link-Bridge/releases/download/v1.0.0/LinkBridge-Android.apk",
      badge: "Android APK",
      primary: true,
    },
  },
};
