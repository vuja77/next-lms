export const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme)
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');

    }
};

export const toggleTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
};