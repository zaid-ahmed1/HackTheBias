import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="justify-between">
        <Typography variant="h6">HackTheBias</Typography>
        <div>
          <Button color="inherit" component={Link} href="/">Home</Button>
          <Button color="inherit" component={Link} href="/about">About</Button>
          <Button color="inherit" component={Link} href="/faq">FAQ</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
