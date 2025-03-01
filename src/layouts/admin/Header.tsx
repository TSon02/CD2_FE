import { useState } from 'react';

import {
    Avatar,
    Box,
    BoxProps,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
    styled,
    useMediaQuery,
} from '@mui/material';
import { common, grey } from '@mui/material/colors';
import { IconLogout, IconMenu2, IconSettings } from '@tabler/icons-react';

import { Button } from '@/components/common';
import { pxToRem } from '@/utils/pxToRem';

type Props = {
    onToggleSidebar: () => void;
    isOpenSidebar: boolean;
    isMobile?: boolean;
};

const Header = ({ onToggleSidebar, isOpenSidebar }: Props) => {
    const isMobile = useMediaQuery('(max-width:767px)');
    const [anchorElMenuSetting, setAnchorElMenuSetting] =
        useState<null | HTMLElement>(null);

    const isOpenMenuSetting = Boolean(anchorElMenuSetting);

    const handelOpenMenuSetting = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElMenuSetting(event.currentTarget);
    };

    const handleCloseMenuSetting = () => {
        setAnchorElMenuSetting(null);
    };

    return (
        <StyledHeader
            component="header"
            isOpenSidebar={isOpenSidebar}
            isMobile={isMobile}
        >
            {isMobile && (
                <Button
                    onClick={onToggleSidebar}
                    sx={{
                        display: 'flex',
                        height: pxToRem(32),
                        minWidth: pxToRem(32),
                        padding: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '3px',
                    }}
                    variant="outlined"
                    typeButton="primary"
                >
                    <IconMenu2 />
                </Button>
            )}
            <Box sx={{ marginLeft: 'auto' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: pxToRem(8),
                        cursor: 'pointer',
                    }}
                    onClick={handelOpenMenuSetting}
                >
                    <Tooltip title="Setting">
                        <IconButton size="small">
                            <Avatar sx={{ width: 32, height: 32 }} />
                        </IconButton>
                    </Tooltip>
                    <Typography
                        sx={{
                            fontWeight: 500,
                        }}
                    >
                        Admin
                    </Typography>
                </Box>
                <Menu
                    open={isOpenMenuSetting}
                    onClose={handleCloseMenuSetting}
                    anchorEl={anchorElMenuSetting}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            width: 270,
                            overflow: 'visible',
                            boxShadow:
                                ' 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                            mt: 7,
                            '& .MuiAvatar-root': {
                                width: 24,
                                height: 24,
                                mr: 1,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem
                        onClick={handleCloseMenuSetting}
                        disableTouchRipple
                    >
                        <ListItemIcon>
                            <Avatar sx={{ width: 32, height: 32 }} />
                        </ListItemIcon>
                        Profile
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseMenuSetting}
                        disableTouchRipple
                    >
                        <ListItemIcon>
                            <IconSettings />
                        </ListItemIcon>
                        Setting
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseMenuSetting}
                        disableTouchRipple
                    >
                        <ListItemIcon>
                            <IconLogout />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
        </StyledHeader>
    );
};

const StyledHeader = styled(Box)<BoxProps & Omit<Props, 'onToggleSidebar'>>`
    height: ${({ theme }) => theme.size.height.header};
    position: fixed;
    top: 0;
    left: ${({ theme, isOpenSidebar, isMobile }) =>
        isOpenSidebar ? (isMobile ? 0 : theme.size.width.sidebar) : 0};
    right: 0;
    transition: left 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${pxToRem(16)};
    border-bottom: 2px solid ${grey[300]};
    background-color: ${common.white};
`;

export default Header;
