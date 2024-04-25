import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Footer = () => {
    const navItems = [{ route: "Home", pathName: "/" }, { route: "Pages", pathName: "/pages" }, { route: "Category", pathName: "/categories/news" }, { route: "News", pathName: "/news" }, { route: "About", pathName: "/about" }, { route: "Contact", pathName: "/contact" }];
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{ "& svg": { color: "white" } }}>
                    <IconButton >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton >
                        <FacebookIcon />
                    </IconButton>

                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item, idx) => (
                        <Link href={item.pathName}
                            key={idx}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Button className='text-white'> {item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography color="gray" variant="body2" textAlign="center">@2024 The Dragon News. Design by Programming Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;