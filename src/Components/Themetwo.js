import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import user from "../images/user3.jpg";

const Themetwo = ({ src, alt }) => {
  return (
    <AvatarGroup max={1}>
      <div
        style={{
          width: 350,
          height: 350,
          borderRadius: '0%',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
          border: '75px solid #00eeff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            zIndex: 1, // To make sure the Avatar is above the border
            boxShadow: 'none', // To remove the default box-shadow
          }}
          alt={alt}
          src={user}
        />
      </div>
    </AvatarGroup>
  );
};


export default Themetwo