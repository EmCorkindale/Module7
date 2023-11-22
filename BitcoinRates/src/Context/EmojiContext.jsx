import { createContext, useContext, useState } from "react";
import emotionHappy from "../assets/emotion-happy.svg";
import angry from "../assets/angry.svg";
// 1. Create the context
const EmojiContext = createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const EmojiProvider = (props) => {
// store the current user in state at the top level
const [myMood, setMyMood] = useState(true);
// sets user object in state, shared via context
const toggleMood = () => {
    setMyMood((prevMyMood) => !prevMyMood);
};
// 2. Provide the context.
// The Provider component of any context (UserContext.Provider)
// sends data via its value prop to all children at every level.
// We are sending both the current user and an update function
return (
<EmojiContext.Provider value={{myMood, setMyMood}}>
{props.children}
<div className="Emoji componentBox">
            <button onClick={toggleMood}>Change Mood</button>
            {myMood ? (
                <img src={emotionHappy} alt="Happy Emoji" />
            ) : (
                <img src={angry} alt="Angry Emoji" />
            )}
        </div>
</EmojiContext.Provider>
);
}
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => {
return useContext(EmojiContext);
}
