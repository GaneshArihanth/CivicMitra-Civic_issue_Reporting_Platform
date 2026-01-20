# 🏙️ Civic Mitra

**Your Partner in Civic Reporting & Transparent Governance**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)
[![Ethereum](https://img.shields.io/badge/Ethereum-Solidity-3C3C3D)](https://ethereum.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Supported-orange)](https://firebase.google.com/)

--- 

## 📖 Overview

**Civic Mitra** is a cutting-edge, cross-platform mobile and web application designed to empower citizens to report civic issues (like potholes, garbage dumps, broken streetlights) directly to authorities. 

What sets Civic Mitra apart is its **Blockchain-based Complaint Registry**, ensuring that every report is immutable, transparent, and verifiable. Combined with **AI-powered analysis** and **Real-time Geo-tagging**, it bridges the gap between citizens and local governance.

---

## ✨ Key Features

### 📱 Frontend & Mobile App

#### 1. 🌐 Cross-Platform Support
*   **What it is:** A unified application architecture that runs seamlessly on Web, Android, and iOS devices using Capacitor and React.
*   **Why it matters:** Ensures that every citizen can access the platform regardless of their device, maximizing reach and inclusivity.
*   **How to use:** Access via any web browser or install the dedicated mobile app on your Android/iOS device for a native experience.

#### 2. 📍 Geo-Location Tagging
*   **What it is:** Automatically captures high-precision GPS coordinates (Latitude/Longitude) the moment a report is initiated.
*   **Why it matters:** Eliminates ambiguity about the issue's location, allowing authorities to dispatch teams to the exact spot without delays.
*   **How to use:** Grant location permissions when prompted. The app will auto-detect your location; you can also manually adjust the pin on the map for fine-tuning.

#### 3. 📸 Multimedia Evidence
*   **What it is:** robust file upload system supporting high-resolution images and videos.
*   **Why it matters:** Visual proof is undeniable. It helps authorities assess the severity of the issue (e.g., depth of a pothole) remotely and prevents false reporting.
*   **How to use:** Tap the camera icon to take a photo/video directly or upload from your gallery while filing a complaint.

#### 4. 🤖 AI Integration (Azure & Gemini)
*   **What it is:** Smart analysis using Azure AI and Google Generative AI to process text descriptions and images.
*   **Why it matters:** Automates categorization (e.g., detecting "Garbage" vs "Road Issue") and assesses severity, reducing manual workload for civic officials and speeding up response times.
*   **How to use:** Simply describe the issue or upload a photo. The AI will suggest the most relevant category and tags automatically.

#### 5. ⏱️ Real-Time Status Tracking
*   **What it is:** Live updates on complaint status (Reported → In Progress → Resolved) synced via Firebase.
*   **Why it matters:** Keeps citizens informed at every step, building trust and accountability in the system.
*   **How to use:** Go to the "My Reports" section to see a timeline of actions taken on your complaints.

#### 6. 📶 Offline Support (PWA)
*   **What it is:** Progressive Web App capabilities that cache essential resources.
*   **Why it matters:** Allows users to draft reports even in areas with poor or no internet connectivity. Data syncs automatically once online.
*   **How to use:** Open the app anytime. If offline, your report will be saved locally and uploaded when connection is restored.

#### 7. 🌍 Internationalization (i18next)
*   **What it is:** Full support for multiple local languages.
*   **Why it matters:** Removes language barriers, making the platform accessible to a diverse population.
*   **How to use:** Tap the "Language" icon in the settings or navbar to switch the entire app interface to your preferred language.

### ⛓️ Blockchain Registry

#### 1. 🔒 Immutable Records
*   **What it is:** Every complaint's critical data is hashed and stored on the **Ethereum/Optimism** blockchain.
*   **Why it matters:** Creates a tamper-proof digital ledger. Once recorded, no one (not even administrators) can alter the original complaint details, preventing corruption.
*   **How to use:** Happens automatically in the background. You receive a transaction hash as proof of registration.

#### 2. 📦 Decentralized Storage (IPFS)
*   **What it is:** Media files (photos/videos) are stored on the InterPlanetary File System (IPFS) via NFT.Storage.
*   **Why it matters:** Ensures that evidence is stored permanently across a decentralized network, making it resistant to censorship or server failures.
*   **How to use:** Upload your media normally; the system handles the decentralized upload and links it to your blockchain record.

#### 3. 📜 Smart Contracts
*   **What it is:** Self-executing code on the blockchain that manages the lifecycle of a complaint.
*   **Why it matters:** Enforces logic transparently. For example, a complaint can only be marked "Resolved" if specific conditions are met, and the status change is permanently recorded.
*   **How to use:** Officials interact with these contracts via their dashboard to update statuses securely.

#### 4. 🔍 Public Transparency
*   **What it is:** A verification mechanism that allows anyone to audit complaints.
*   **Why it matters:** Empowers citizens and watchdogs to hold authorities accountable by verifying that the data shown in the app matches the immutable blockchain record.
*   **How to use:** Click the "Verify on Blockchain" button on any complaint to compare the live data with the on-chain hash.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 + Vite** | Fast, modern UI development. |
| **Mobile Runtime** | **Capacitor** | Native Android/iOS builds from web code. |
| **Styling** | **Tailwind CSS + MUI** | Beautiful, responsive design system. |
| **State Management** | **React Context / Hooks** | Efficient state handling. |
| **Backend Services** | **Firebase** | Auth, Firestore, Cloud Functions. |
| **Blockchain** | **Solidity + Hardhat** | Smart contract development & deployment. |
| **Web3 Integration** | **Ethers.js** | Connecting frontend to blockchain. |
| **AI Services** | **Azure AI + Gemini** | Intelligent text/image analysis. |
| **Maps** | **Leaflet** | Interactive maps for issue visualization. |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

*   **Node.js** (v18+ recommended)
*   **Git**
*   **Java JDK** (for Android builds)
*   **Android Studio** (for Android emulation)
*   **Metamask Wallet** (for Blockchain interaction)

### 📂 Repository Structure

*   `Civic Report/`: The main React/Capacitor application.
*   `complaint-registry/`: The Hardhat blockchain project.

---

## 💻 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/CivicReporting-App.git
cd CivicReporting-App
```

### 2. Frontend Setup (`Civic Report`)

Navigate to the frontend directory:
```bash
cd "Civic Report"
```

Install dependencies:
```bash
npm install
```

**Configuration (.env):**
Create a `.env` file in the `Civic Report` directory with the following keys:
```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
VITE_AZURE_AI_KEY=your_azure_key
VITE_GEMINI_API_KEY=your_gemini_key
```

Run the Development Server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### 3. Blockchain Setup (`complaint-registry`)

Navigate to the blockchain directory:
```bash
cd ../complaint-registry
```

Install dependencies:
```bash
npm install
```

**Configuration (.env):**
Create a `.env` file in the `complaint-registry` directory:
```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_key
NFT_STORAGE_KEY=your_nft_storage_key
```

Compile Smart Contracts:
```bash
npx hardhat compile
```

Deploy to Testnet (Sepolia):
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
*Note the deployed contract address and update it in your Frontend configuration if necessary.*

---

## 📱 Mobile Development (Android)

To run the app on an Android device or emulator:

1.  Build the web assets:
    ```bash
    cd "Civic Report"
    npm run build
    ```

2.  Sync with Capacitor:
    ```bash
    npx cap sync
    ```

3.  Open in Android Studio:
    ```bash
    npx cap open android
    ```
    *From Android Studio, you can run the app on a connected device or emulator.*

---

## 🌐 Deployment

### Web Deployment (Vercel/Netlify)
The `Civic Report` folder is a standard Vite app.
1.  Push your code to GitHub.
2.  Import the `Civic Report` folder into Vercel or Netlify.
3.  Add your Environment Variables in the dashboard.
4.  Deploy!

### Smart Contract Deployment
Use the `deploy:sepolia` or `deploy:optimism` scripts defined in `package.json` to deploy your contracts to live testnets.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Ganesh Arihanth**
