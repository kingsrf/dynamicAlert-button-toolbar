import AlertButton from "./AlertButton";

export default function Toolbar() {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <AlertButton message="Hello from Button 1!">Greet</AlertButton>
            <AlertButton message="Warning! This is Button 2.">Warn</AlertButton>
            <AlertButton message="Goodbye from Button 3!">Farewell</AlertButton>
        </div>
    );
}
