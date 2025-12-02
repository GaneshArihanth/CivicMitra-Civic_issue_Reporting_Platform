# 🏙️ Civic Mitra (MobilEASE)

**Your Partner in Civic Reporting & Transparent Governance**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)
[![Ethereum](https://img.shields.io/badge/Ethereum-Solidity-3C3C3D)](https://ethereum.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Supported-orange)](https://firebase.google.com/)

---

## 📖 Overview

**Civic Mitra** (also known as MobilEASE) is a cutting-edge, cross-platform mobile and web application designed to empower citizens to report civic issues (like potholes, garbage dumps, broken streetlights) directly to authorities. 

What sets Civic Mitra apart is its **Blockchain-based Complaint Registry**, ensuring that every report is immutable, transparent, and verifiable. Combined with **AI-powered analysis** and **Real-time Geo-tagging**, it bridges the gap between citizens and local governance.

---

## ✨ Key Features

### 📱 Frontend & Mobile App
*   **Cross-Platform Support**: Runs seamlessly on Web, Android, and iOS (via Capacitor).
*   **Geo-Location Tagging**: Automatically captures precise GPS coordinates for accurate issue reporting.
*   **Multimedia Evidence**: Upload photos and videos to substantiate claims.
*   **AI Integration**: Uses **Azure AI** and **Google Generative AI** for smart categorization and analysis of reports.
*   **Real-Time Status**: Track the progress of your complaints (Reported, In Progress, Resolved) via Firebase.
*   **Offline Support**: PWA capabilities allow usage even with poor internet connectivity.
*   **Internationalization**: Multi-language support (i18next).

### ⛓️ Blockchain Registry
*   **Immutable Records**: Complaints are hashed and stored on the **Ethereum/Optimism** blockchain.
*   **Decentralized Storage**: Evidence is stored using **IPFS (NFT.Storage)** for permanence.
*   **Smart Contracts**: Automated logic for complaint registration and status updates.
*   **Transparency**: Publicly verifiable proof of every reported issue.

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
