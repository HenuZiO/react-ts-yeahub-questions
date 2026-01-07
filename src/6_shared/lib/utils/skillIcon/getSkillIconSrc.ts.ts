export const SKILL_ICON_MAP: Record<string, string> = {
    golang: "go",
    css: "css3",
    postgres: "postgresql",
    networks: "networkx",
    "c#": "cplusplus",
    "c++": "cplusplus",
    net: "dot-net",
    html: "html5",
};

export const getSkillIcon = (name: string) => {
    if (!name) return undefined;
    
    const normalized = name.toLowerCase().replace(/[\s.-]/g, "");
    const iconName = SKILL_ICON_MAP[normalized] ?? normalized;
    
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`;
};