import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import user from "../images/user3.jpg";

const Theme = ({ src, alt }) => {
  return (
    <AvatarGroup max={1} style={{backgroundColor:"transparent"}}>
      <div
        style={{
          width: 350,
          height: 350,
         borderRadius: '50%',
          clipPath: 'polygon(50% 0%, 87% 25%, 87% 75%, 50% 100%, 13% 75%, 13% 25%)',
          border: '55px solid #00eeff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'rotate 10s linear infinite',
        }}
      >
        <Avatar
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            zIndex: 1, // To make sure the Avatar is above the border
            boxShadow: 'none',
          }}
          alt={alt}
          src={user}
        />
      </div>
    </AvatarGroup>
  );
};

export default Theme