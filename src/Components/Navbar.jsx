import React, { useEffect, useState } from 'react';
import { AppBar, Box, InputBase, Typography, Toolbar, Drawer, ListItem, Container, Avatar, Button, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { searchFood, category } from '../Slices/action';
import { FaUser } from "react-icons/fa";
import { logout } from '../Slices/slices'
import Badge from '@mui/material/Badge';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';

const pages = [
    {
        id: 1,
        title: "Home",
        route: '/'
    },
    {
        id: 2,
        title: "Registration",
        route: '/registration'
    },
    {
        id: 3,
        title: "Login",
        route: '/login'
    }
];

function Navbar() {

    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [searchField, setSearchField] = useState('')
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const storedUserId = useSelector(state => state.rootReducer.loggedUserData.id)
    const userName = useSelector(state => state.rootReducer.loggedUserData.name)
    const searchedData = useSelector(state => state.rootReducer.searchFoodData.data)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleSearch = () => {
        dispatch(searchFood(searchField))
    }

    useEffect(() => {
        if (searchedData) {
            navigate('/searchPage', { state: searchedData })
        }
    }, [searchedData])

    useEffect(() => {
        if (userName) {
            setName(userName)
        }
    }, [userName])

    useEffect(() => {
        if (storedUserId) {
            setId(storedUserId)
        }
    }, [storedUserId])

    // const toggleCategoryOption = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        setId(null)
        setName('')
        dispatch(logout())
    }

    const handleFoodCategory = (name) => {
        const price = -1
        const categoryName = name.target.value
        if (categoryName === "Select Category")
            alert("Select Category !")
        else
            dispatch(category({ categoryName: categoryName, price: price }))
    }

    return (
        <AppBar position="fixed" >

            <Container maxWidth="xl" sx={{ padding: '0px 4px' }} >

                <Toolbar disableGutters  >

                    {/* _________ Logo For Large Screen _________ */}
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}

                    {/* ____________ Small Screen Menu _____________ */}
                    {/* <Box sx={{ display: { xs: 'flex', alignItems: 'center', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                            style={{ padding: '0px' }}
                        >
                            <MenuIcon sx={{ fontSize: '45px' }} />
                        </IconButton>
                    </Box> */}

                    {/* ______________ Large Screen (Pages) ______________ */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {
                            pages.map((page) => (
                                <ListItem key={page.id} sx={{ my: 2, color: 'white', display: 'block' }} >
                                    <Link to={page.route}>{page.title}</Link>
                                </ListItem>
                            ))
                        }
                    </Box>

                    {/* _______________ Category (Large Screen)_______________ */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }} className='md:mr-5'>
                        <Link to='/categoryPage' >
                            <select onChange={(e) => (handleFoodCategory(e))} className={`text-black outline-none pl-2 text-[17px] w-[12rem] font-normal py-1 rounded-md `} >
                                <option className='text-slate-100'>Select Category</option>
                                <option>Pasta</option>
                                <option>Beef</option>
                                <option>Breakfast</option>
                                <option>Chicken</option>
                                <option>Dessert</option>
                                <option>Lamb</option>
                            </select>
                        </Link>
                    </Box>

                    {/* __________ Search Box (Large screen ) ___________ */}
                    <Box sx={{ display: { xs: 'none', md: 'block' }, marginRight: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                        <input type="search" onChange={e => setSearchField(e.target.value)} className='text-black h-[32px] px-2 rounded outline-none' />
                        <button onClick={handleSearch} className='py-1 pr-2' >
                            <SearchIcon sx={{ color: 'black' }} />
                        </button>
                    </Box>

                    {/* _________ Notification___________ */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Link to=''>
                            <Badge badgeContent={4} color="success" >
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </Box>

                    {/* _________ Small Screen _______________ */}
                    <Box sx={{
                        padding: '0px 7px',
                        width: '100%',
                        display: { xs: 'flex', md: 'none' },
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: 'space-between'  // This is the missing part
                    }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                            style={{ padding: '0px' }}
                        >
                            <MenuIcon sx={{ fontSize: '45px' }} />
                        </IconButton>

                        <Box sx={{ width: { xs: '35%'} ,marginRight:'4px' }} >
                            <Link to='/categoryPage'>
                                <select onChange={(e) => (handleFoodCategory(e))} className={`text-black outline-none w-[100%] pl-2 text-[14px] font-normal py-2 md:py-[6px] rounded-md `} >
                                    <option className='text-slate-100'>Select Category</option>
                                    <option>Pasta</option>
                                    <option>Beef</option>
                                    <option>Breakfast</option>
                                    <option>Chicken</option>
                                    <option>Dessert</option>
                                    <option>Lamb</option>
                                </select>
                            </Link>
                        </Box>

                        <Box sx={{ width: { xs: '35%', md: '80%' }, backgroundColor: 'white', borderRadius: '4px', display: 'flex' }}>
                            <input type="search" onChange={e => setSearchField(e.target.value)} className=' w-[100%] text-black h-[34px] px-2 rounded outline-none' />
                            <button onClick={handleSearch} className='py-1 pr-2' >
                                <SearchIcon sx={{ color: 'black' }} />
                            </button>
                        </Box>

                        <Link to='' className='pr-2'>
                            <Badge badgeContent={4} color="success" >
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>

                    </Box>

                    {/* _____________________ Drawer for Small Screen  ____________________ */}
                    <Drawer open={open} onClose={toggleDrawer(false)}>

                        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>

                            {/* _________ User Profile _______________ */}
                            <Box sx={{ flexGrow: 0, fontSize: '24px', padding: '15px 55px', fontWeight: '600', color: 'green' }}>
                                {
                                    name ? <p className=''>{name}</p> : <FaUser className='border-[1px] border-white text-4xl p-1 rounded-full' />
                                }
                            </Box>
                            <Divider sx={{ backgroundColor: 'grey' }} />
                            <Box sx={{ paddingTop: '20px', fontSize: '19px' }} >

                                <ListItem >
                                    <Link to={'/'} className='px-5 hover:text-green-600' >Home</Link>
                                </ListItem>

                                <ListItem>
                                    <Link to={'/registration'} className='px-5 hover:text-green-600' >Registration</Link>
                                </ListItem>

                                {
                                    !id &&
                                    <ListItem>
                                        <Link to={'/login'} className='px-5 hover:text-green-600' >Login</Link>
                                    </ListItem>
                                }

                                {
                                    id &&
                                    <ListItem>
                                        <Link onClick={handleLogout} className='px-5 hover:text-green-600' >Log Out</Link>
                                    </ListItem>
                                }

                            </Box>

                        </Box>

                    </Drawer>

                </Toolbar>

            </Container>

        </AppBar >
    );
}
export default Navbar;
