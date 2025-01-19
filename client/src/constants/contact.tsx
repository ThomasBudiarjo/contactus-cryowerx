interface ContactInfo {
    icon: string
    darkIcon: string
    text: string
    alt?: string
}

export const contactInfo: ContactInfo[] = [
    {
        icon: "/assets/phone.svg",
        darkIcon: "/assets/phone-dark.svg",
        text: "+123 456 7890",
        alt: "phone"
    },
    {
        icon: "/assets/mail.svg",
        darkIcon: "/assets/mail-dark.svg",
        text: "contact@mail.com",
        alt: "email"
    },
    {
        icon: "/assets/location.svg",
        darkIcon: "/assets/location-dark.svg",
        text: "123 Street, City, Country",
        alt: "location"
    }
]