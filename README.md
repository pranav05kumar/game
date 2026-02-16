# Serpent's Journey

A modern, AI-enhanced reimagining of the classic Snake game. Features an Evolution System, Dynamic Biomes, an AI Guide, and Adaptive Difficulty, all powered by the Google Gemini API.

## Features

- **Evolution System**: The snake evolves as it consumes food, unlocking new abilities.
- **Dynamic Biomes**: The environment changes based on your progress.
- **AI Guide**: An intelligent guide that provides tips and commentary.
- **Adaptive Difficulty**: The game adjusts its difficulty based on your performance.

## 🏁 Phase 1 Milestone: COMPLETED
Phase 1 of Serpent's Journey is now officially complete. Key accomplishments include:
- **Core Engine**: High-performance Canvas rendering for smooth gameplay.
- **Cyberpunk UI**: Full aesthetic overhaul with neon variables and glassmorphism.
- **AI Integration**: Stable connection to Gemini 2.0 Flash for real-time game enhancements.
- **Deployment**: Automatic CI/CD pipeline via Cloud Build and Cloud Run.
- **Helix Protocol**: Initial release of the AI System Guide.

## Technology Stack

- **Frontend**: React, Vite
- **Styling**: Vanilla CSS
- **AI Integration**: Google Gemini API

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pranav05kumar/game.git
    cd game
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Key:**
    -   Create a `.env` file in the root directory.
    -   You can use `.env.example` as a template: `cp .env.example .env`
    -   Add your Google Gemini API key to the `.env` file:
        ```env
        VITE_GEMINI_API_KEY=your_api_key_here
        ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

## License

MIT
