const imagePath = "/src/assets/";

const  teams = [
    {
        name: "River Plate",
        logo: imagePath + "teams/river.png",
        backGroundImage: imagePath + "home/alvarez-river.jpg",
        backGroundColor: "radial-gradient(circle, rgba(237,43,23,1) 0%, rgba(74,8,1,1) 100%)",
        primaryColor: "rgba(237,43,23,1)",
        secondaryColor: "rgba(74,8,1,1)",
        number: 9
    },
    {
        name: "Argentina National Team",
        logo: imagePath + "teams/argentina.png",
        backGroundImage: imagePath + "home/alvarez-arg2.jpg",
        // backGroundColor:  "linear-gradient(180deg, #2E3981 0%, rgba(102,88,191,1) 50%)",
        backGroundColor:  "radial-gradient(circle, #2E3981 0%, rgba(102,88,191,1) 100%)",
        primaryColor: "#2E3981",
        secondaryColor: "rgba(102,88,191,1)",
        number: 9
    },
    {
        name: "Manchester City",
        logo: imagePath + "teams/city.png",
        backGroundImage: imagePath + "home/alvarez-city.jpg",
        backGroundColor: "radial-gradient(circle, rgba(154,199,251,1) 0%, rgba(30,119,222,1) 100%)",
        primaryColor: "rgba(154,199,251,1)",
        secondaryColor: "rgba(30,119,222,1)",
        number: 19
    }
]

export default teams;
