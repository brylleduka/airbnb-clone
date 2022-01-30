
const Footer = () => {
  return (
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">ABOUT</h5>
              <p>How Airbnb works</p>
              <p>Newsroom</p>
              <p>Investors</p>
              <p>Airbnb Plus</p>
              <p>Airbnb Luxe</p>
          </div>
         
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">COMMUNITY</h5>
              <p>Accessibility</p>
              <p>This is not a real site</p>
              <p>It&#39;s a pretty awesome clone</p>
              <p>NextJS</p>
              <p>Tailwind</p>
          </div>
        
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">HOST</h5>
              <p>Brylle React</p>
              <p>Presents</p>
              <p>MERN Stacks</p>
              <p>ExpressJs</p>
              <p>Socket.io</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">Support</h5>
              <p>Help Centre</p>
              <p>Trust & Safety</p>
              <p>Apollo</p>
              <p>Graphql</p>
              <p>Redux</p>
          </div>
      </footer>
  );
};

export default Footer;
