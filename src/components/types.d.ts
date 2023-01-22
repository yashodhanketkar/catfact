type themeAllowed = " light" | " dark";

interface themeProps {
    setTheme: React.Dispatch<React.SetStateAction<themeAllowed>>;
}

interface catFactProps {
    data: catfact;
    refetch: any;
}

