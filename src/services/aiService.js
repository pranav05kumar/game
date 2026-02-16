import { GoogleGenerativeAI } from "@google/generative-ai";

// Standard stable SDK: @google/generative-ai
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const modelId = "gemini-1.5-flash"; // Using 1.5-flash for maximum stability/speed

// Helper to strip markdown code blocks and parse JSON
const cleanJSON = (text) => {
    if (!text) return {};
    try {
        let clean = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(clean);
    } catch (e) {
        console.error("JSON Parse Error:", e, "Input:", text);
        // Fallback: try to find anything that looks like JSON
        const match = text.match(/\{[\s\S]*\}/);
        if (match) {
            try { return JSON.parse(match[0]); } catch (inner) { /* ignore */ }
        }
        return {};
    }
};

export const generateEvolution = async (score, currentForm) => {
    try {
        const prompt = `
      You are the Evolution Engine for a cyber-snake game. 
      Score: ${score}. Current form: ${JSON.stringify(currentForm)}.
      Generate a new evolution.
      Return ONLY a JSON object:
      {
        "name": "Creative Name",
        "description": "Short description (max 15 words)",
        "ability": "Ability name",
        "visuals": {
          "headColor": "Hex",
          "bodyColor": "Hex"
        }
      }
    `;

        const model = genAI.getGenerativeModel({ model: modelId });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return cleanJSON(response.text());
    } catch (error) {
        console.error("Evolution generation failed:", error);
        return {
            name: "Fallback Serpent",
            description: "Safe mode engaged.",
            ability: "Stability",
            visuals: { headColor: "#FFFFFF", bodyColor: "#888888" }
        };
    }
};

export const generateBiome = async (level) => {
    try {
        const prompt = `
      You are the World Architect for a cyber-snake game. Level ${level}.
      Generate a new themed biome.
      Return ONLY a JSON object:
      {
        "name": "Biome Name",
        "description": "Short description",
        "bgColor": "Hex Code (dark)",
        "foodColor": "Hex Code (bright)"
      }
    `;

        const model = genAI.getGenerativeModel({ model: modelId });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return cleanJSON(response.text());
    } catch (error) {
        console.error("Biome generation failed:", error);
        return {
            name: "Digital Void",
            description: "Emergency power.",
            bgColor: "#060608",
            foodColor: "#00E5FF"
        };
    }
};

export const getGuideMessage = async (event, context) => {
    try {
        const prompt = `
      You are "Helix", a witty AI companion.
      Event: ${event}. Context: ${JSON.stringify(context)}.
      Short 1-sentence tip (max 20 words). Witty/Cyberpunk.
    `;

        const model = genAI.getGenerativeModel({ model: modelId });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Guide generation failed:", error);
        return "Signal lost...";
    }
};
