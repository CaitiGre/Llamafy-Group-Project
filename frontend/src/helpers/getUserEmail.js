export default function getUserEmail() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === 'user_email') {
            return decodeURIComponent(value);
        };
    };
    return null;
};