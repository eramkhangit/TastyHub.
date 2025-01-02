import React from 'react'
import { Box, Container, InputBase, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
// import AutoplayCarousel from './CarouselItem/AutoPlayCarousel';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.linen,
    // alpha(theme.palette.common.linen, 0.25)
    // '&:hover': {
    //     backgroundColor: theme.palette.common.linen,
    // },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        // marginLeft: theme.spacing(1),
        // width: '300px', // Set width for screen sizes medium and above
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledTypography = styled('span')(({ theme }) => ({
    color: theme.palette.common.darkBrown,
}))

// ________________________ Feature Dishes _________________
const featureDishes = [
    {
        id: 1,
        title: "Fast and Easy Pasta With Blistered Cherry Tomato Sauce",
        image: 'https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 10,
        rating:3.4
    },
    {
        id: 2,
        title: "Chicken Tanduri",
        image: 'https://wallpaperaccess.com/full/8736682.jpg',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 8,
        ratiog:3.9
    },
    {
        id: 3,
        title: "Grilled Chicken",
        image: 'https://www.wallpaperflare.com/static/861/656/990/chicken-dishes-grilled-delicious-wallpaper.jpg',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 30,
        rating:4
    },
    {
        id: 4,
        title: "Panjabi Mutton Curi",
        image: 'https://veenaazmanov.com/wp-content/uploads/2020/04/Indian-Goat-Curry-or-Mutton-Curry24-720x720.jpg',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 10,
        rating:5.1
    },
    {
        id: 5,
        title: "Fast and Easy Pasta With Blistered Cherry Tomato Sauce",
        image: 'https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain',
        descriptiofn:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 7,
        rating:5.3
    },
    {
        id: 6,
        title: "Fast and Easy Pasta With Blistered Cherry Tomato Sauce",
        image: 'https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 40,
        rating:4.5
    },
    {
        id: 7,
        title: "Fast and Easy Pasta With Blistered Cherry Tomato Sauce",
        image: 'https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 10,
        rating:2.9
    },
    {
        id: 8,
        title: "Fast and Easy Pasta With Blistered Cherry Tomato Sauce",
        image: 'https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 3,
        rating:3.6
    },
    {
        id: 9,
        title: "Mince Paste",
        image: 'https://media.citizen.co.za/wp-content/uploads/2023/01/recipe-with-mince-one-pan-pasta-825x550.jpg',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo",
        price: 14,
        rating:4.9
    },
    ,
    {
        id: 10,
        title: "penne pasta bolognese",
        image: 'https://s41998.pcdn.co/wp-content/uploads/2017/06/Gluten-prevents-absorption-of-vitamins-and-minerals-even-for-your-eyes.jpg.optimal.jpg',
        price: 20,
        rating:5
    }

]


function Home() {
    return (
        <>
            <Container className='mt-16'>

                {/* ________________ Hero Section _________________ */}
                <Box className='home-bg-1 w-full h-[50vh] md:h-[76vh] object-cover'>

                    <Box className="flex flex-col gap-4 justify-center items-center w-full md:w-[60%] m-auto p-4">

                        <StyledTypography variant='p' className="font-bold pt-8 text-[20px] md:text-[30px] text-center">
                            Experience Gourmet Delights without Leaving Home!
                        </StyledTypography>

                        <StyledTypography className="text-center home-subheading-text text-[16px]">
                            Here's the description with the first letter of each sentence capitalized:

                            Indulge in gourmet cuisine delivered straight to your door! Our app connects you with top chefs and exquisite restaurants, making fine dining effortless. Treat yourself to a luxurious meal at home and elevate your dining experience today!
                        </StyledTypography>

                    </Box>
                    
                </Box>

            </Container>
        </>
    )
}

export default Home