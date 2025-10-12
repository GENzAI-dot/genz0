# Despia × Lovable — Project Setup Guide

> 🚦 **Source of Truth for Native Features**
> This document anchors all Despia-native implementation in this Lovable project.

---

## Operating Mode

* **Native layer:** Use **Despia** only via `despia-native` package
* **No custom wrappers** — call `despia('scheme://...')` directly
* **Deep links & associated domains:** Host iOS AASA at `/.well-known/apple-app-site-association` and Android assetlinks.json at `/.well-known/assetlinks.json`

```bash
npm install despia-native
```

```ts
import despia from 'despia-native';
```

---

## Documentation Sources (memory-proof)

### Primary Resources
- **Despia Documentation:** https://docs.despia.com
- **Despia × Lovable Sitemap:** [To be added when accessed]

### Feature Pages Used
- Push Notifications (OneSignal): [Pending docs ritual]
- RevenueCat IAP: [Pending docs ritual]
- Deep Links: [Pending docs ritual]
- Apple Sign-In: [Pending docs ritual]

### Docs Cache
*(Latest prompts cached here for offline reference)*

---

## Lovable Docs Ritual (REQUIRED for every native feature)

1. **Open** the Despia × Lovable sitemap
2. **Find** the page for the requested feature
3. **Open & review** that page
4. **Locate** the "Lovable Prompt" and **copy it**
5. **Paste & execute** that prompt to generate code/config
6. **Log the source URL** in "Documentation Sources" above
7. If live retrieval fails, use cached docs and retry later

---

## Current Setup Status

### ✅ Completed
- [x] Capacitor installed and configured
- [x] `despia-native` package installed (v1.0.14)
- [x] Basic Despia demo component created
- [x] Android assetlinks.json configured

### 🚧 In Progress
- [ ] Push notifications (OneSignal) setup
- [ ] Apple Sign-In implementation
- [ ] RevenueCat IAP integration

### 📋 Pending
- [ ] Safe area implementation
- [ ] Mobile UI guardrails
- [ ] Deep link routing

---

## Authentication Strategy

### Google Login
- **Implementation:** Lovable-managed (use existing Lovable Google auth)
- **Despia config:** Ensure Google OAuth domain opens externally where required

### Apple Sign-In (Production Concept)
- **Client:** AppleJS inline (iOS, Android, Web)
- **Server:** Custom Edge Functions on Lovable Cloud
- **Rules:**
  1. If stable subject exists → authenticate
  2. Else if email matches → link subject → authenticate
  3. Else create account + identity → authenticate
  4. Stable subject is primary key (email changes don't block login)

---

## RevenueCat — Production Flow

### Console Setup
- [ ] Connect App Store & Play Console
- [ ] Create products → entitlements → offerings
- [ ] Configure webhook to backend (protected with secret)

### Frontend Pattern
```ts
// Start purchase
await despia(
  `revenuecat://purchase?external_id=${encodeURIComponent(userId)}&product=${encodeURIComponent(productId)}`
);

// Handle success hint (server is authority)
window.iapSuccess = async ({ planID, transactionID }) => {
  // Wait for server-confirmed entitlement via realtime
  await waitForSubscriptionConfirm(getEntitlements);
};
```

### Backend Contract (Conceptual)
- Server events/webhooks are source of truth
- Handle idempotently, sync subscriber state
- Notify clients via realtime/pub-sub

---

## Push Notifications (OneSignal)

### Setup Checklist
- [ ] Create OneSignal app
- [ ] Configure APNs (iOS) and Firebase (Android)
- [ ] Add OneSignal App ID to Despia project settings
- [ ] After login, associate push player ID with user

### Implementation
```ts
// Get push player ID
const playerId = despia.onesignalplayerid;

// Backend sends via OneSignal REST API
// (Implementation details flexible)
```

---

## Deep Links & Associated Domains

### iOS — AASA
**Location:** `/.well-known/apple-app-site-association`

```json
{
  "applinks": {
    "details": [{
      "appIDs": ["TEAMID.BUNDLEID"],
      "components": [{ "/": "/*" }]
    }]
  }
}
```

### Android — Asset Links
**Location:** `/.well-known/assetlinks.json`

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "PACKAGE_NAME",
    "sha256_cert_fingerprints": ["SHA256_FINGERPRINT"]
  }
}]
```

**Current Status:** ✅ Android assetlinks.json configured

---

## Mobile UI Guardrails

### Safe Areas
- Use platform safe-area vars on fixed bars, drawers, toasts
- Keep top & bottom bars mounted
- Transition only middle content (~120-160ms fade/translate)

### Touch Model
- Mobile-first component set
- Remove desktop hover patterns
- Prefer `active` + `focus-visible`
- Optional light haptics via Despia

---

## Database Concepts (Backend-Agnostic)

### Core Models
- **Users** — canonical user record
- **User Identities** — external identity mappings (Apple stable subject, email snapshot)
- **Devices (optional)** — device UUID and push player ID associations
- **Subscriptions (optional)** — subscription status from authoritative events

### Realtime
- Optional: emit session/entitlement updates to clients

---

## Project Recovery Protocol

If chat context resets:
1. Check README.md banner
2. Open `DESPIA_README.md`
3. Run Docs Ritual for the feature you're working on

---

## Configuration Values

### Capacitor
- **App ID:** `app.lovable.902199c407ec4b1db3f5f420c74b71f7`
- **App Name:** `genz0`
- **Web Dir:** `dist`

### Android Asset Links
- **Package Name:** `com.genz.app`
- **SHA256 Fingerprint:** `7D:E0:41:5A:2A:6E:97:DC:1E:AE:9A:76:8A:9D:58:4A:4A:03:D6:D0:D4:6C:8A:28:17:AB:A5:E9:DF:62:69:1F`

---

## Footer Macro

> 📘 *Native work anchored:* Opened sitemap → selected feature page → applied **latest Lovable Prompt** → logged source URLs to **`DESPIA_README.md`**. If context was cut off, reopen README banner → `DESPIA_README.md` → repeat the ritual.
