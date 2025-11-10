# FriendsNavigator by nihannihu

![FriendsNavigator Demo](public/screenshot.png)

A real-time group navigation app that enables friends to share their locations during travel. Built with modern web technologies for seamless group travel experiences.

## Features

- 🗺️ **Real-time Location Sharing**: See your friends' locations update in real-time on the map
- 🚗 **Route Planning**: Set destinations and view routes for all group members
- ⏱️ **ETA Calculation**: Get real-time estimates of arrival times for all members
- 👥 **Group Management**: Create or join groups with unique IDs
- 🤝 **Meeting Point Suggestions**: Automatically suggest optimal meeting points
- 📱 **Responsive Design**: Works on both desktop and mobile devices

## Built by nihannihu

This project was created and developed by **nihannihu** as part of a hackathon project. The app demonstrates real-time web technologies and location-based services.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Leaflet.js
- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Database**: MongoDB with Mongoose
- **Mapping**: Geoapify Maps and Routing API
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Geoapify API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nihannihu/friends-connect-webapps.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   GEOAPIFY_API_KEY=your_geoapify_api_key
   PORT=3000
   ```

4. Run database migration:
   ```bash
   npm run migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Visit `http://localhost:3000` in your browser

## Usage

1. Enter your name when prompted
2. Create a new group or join an existing one using a group ID
3. Share your group ID with friends
4. Set a destination for the group
5. Track everyone's location and ETA in real-time

## Contributing

Contributions are welcome! Feel free to fork this project by **nihannihu** and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**nihannihu** - [@nihannihu](https://github.com/nihannihu)

Project Link: [https://github.com/nihannihu/friends-connect-webapps](https://github.com/nihannihu/friends-connect-webapps)