import React from "react";
import Offlocation from "@/components/Offlocation";

const Page = () => {
  const officeLocations = [
    {
      latitude: 13.057903,
      longitude: 77.592044,
      address: "Swan, 2nd Floor, #323, Kodigehalli Main Road, Sahakar Nagar, Bangalore",
      leader: "Priya Mahajan",
      employees: 27,
    },
    {
      latitude: 28.568884,
      longitude: 77.186144,
      address: "GAIL Bhawan, 16 Bhikaji Cama Place, R K Puram, Delhi HQ",
      leader: "Ravi Kumar",
      employees: 45,
    },
    {
      latitude: 23.022592,
      longitude: 72.572615,
      address: "809, Sakar-II, Opp. Town Hall, Near Ellisbridge, Ahmedabad",
      leader: "Anjali Patel",
      employees: 30,
    },
    {
      latitude: 23.182400,
      longitude: 77.454674,
      address: "8-Mapple High Street (2nd Floor), Opp. Aashima Mall, Hoshangabad Road, Bhopal",
      leader: "Suresh Mehta",
      employees: 22,
    },
    {
      latitude: 20.342579,
      longitude: 85.811152,
      address: "UGF-DCB016, DLF Cyber City IDCo Info Park, Chandaka Industrial Estate, Patia, Bhubaneswar",
      leader: "Pooja Nanda",
      employees: 18,
    },
    {
      latitude: 30.738570,
      longitude: 76.786827,
      address: "Udyog Bhavan Annexe Building, 18 Himalaya Marg, Sector 17, Chandigarh",
      leader: "Rajiv Gupta",
      employees: 35,
    },
    {
      latitude: 13.059024,
      longitude: 80.254433,
      address: "3rd Floor, CTS building (Above SBI), BSNL Complex, No: 16, Greams Road, Chennai",
      leader: "Meera Iyer",
      employees: 40,
    },
    {
      latitude: 26.112578,
      longitude: 91.798508,
      address: "2nd Floor, Advika 87, MG Road, Pan Bazar, Guwahati",
      leader: "Arun Sharma",
      employees: 20,
    },
    {
      latitude: 17.478393,
      longitude: 78.565383,
      address: "Module No.105, NSIC Business Park, Kamala Nagar, Dr. A.S. Rao Nagar, Hyderabad",
      leader: "Vishal Rao",
      employees: 50,
    },
  ];

  const backgroundContainerStyle = {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url(https://img.freepik.com/premium-photo/oil-refinery-industrial-background_889227-33103.jpg?w=1060)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    width: '80%',
    maxWidth: '1200px', // Adjust maximum width as needed
    padding: '20px', // Adjust padding as needed
     // Optional: adds slight white background for better readability
    borderRadius: '8px', // Optional: adds rounded corners
  };

  return (
    <div style={backgroundContainerStyle}>
      <div style={contentStyle}>
        {officeLocations.map((location, index) => (
          <Offlocation
            key={index}
            name={location.name}
            address={location.address}
            latitude={location.latitude}
            longitude={location.longitude}
            lname={location.leader}
            num={location.employees}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
