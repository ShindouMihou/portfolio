export function getAgeFromDate(date: string) {
    const now = new Date();
    const birthDate = new Date(date);

    let age = now.getFullYear() - birthDate.getFullYear();
    const months = now.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}