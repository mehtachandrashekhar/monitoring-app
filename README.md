# Monitoring App

This project, **my-monitoring-app**, is a Node.js-based application with integrated monitoring using **Prometheus** and visualization using **Grafana**. The app tracks HTTP request durations and exposes them via Prometheus metrics, which are then displayed on Grafana dashboards.

## Features
- **Node.js application** with basic Express server.
- Integrated **Prometheus** for collecting application metrics.
- **Grafana** for visualizing the metrics in real-time.

## Getting Started

### Prerequisites
To run this application locally, ensure you have the following installed:
- **Docker**: For containerization.
- **Docker Compose**: To easily manage multi-container setups (Prometheus, Grafana, and the app).

### Clone the Repository
```bash
git clone https://github.com/mehtachandrashekhar/monitoring-app.git
cd monitoring-app
```

### Docker Compose Setup
The application uses **Docker Compose** to run multiple services: the Node.js app, Prometheus, and Grafana. The configuration is defined in `docker-compose.yml`.

### Running the Application
Run the following command to start all services:
```bash
docker-compose up -d
```
This command will pull the required Docker images and start the following services:
1. **Node.js app** on port `4000`.
2. **Prometheus** on port `9090`.
3. **Grafana** on port `3000`.

### Prometheus Setup

**Prometheus** is configured to scrape the Node.js app's metrics from the `/metrics` endpoint. The configuration for Prometheus is in the `prometheus.yml` file.

You can access the Prometheus dashboard at:
```
http://localhost:9090
```

### Grafana Setup

Grafana is used to visualize the Prometheus data. You can access the Grafana dashboard at:
```
http://localhost:3000
```
1. **Login** to Grafana using the default credentials (`admin/admin`).
2. **Add Prometheus Data Source**:
   - Navigate to **Configuration > Data Sources**.
   - Add **Prometheus** as a data source and set the URL to `http://prometheus:9090`.
3. **Create a Dashboard**:
   - Click on the **+** icon and select **Create > Dashboard**.
   - Add a new panel with a **Title** like “HTTP Request Duration”.
   - In the **Query** section, select **Prometheus** as the data source and enter the query:
     ```bash
     http_request_duration_ms_bucket
     ```
   - Customize the panel to your preference and click **Apply**.

### Folder Structure

```
/ (Root Directory)
├── app.js                 # Main Node.js file with Express and Prometheus integration
├── package.json           # Node.js dependencies
├── docker-compose.yml     # Docker Compose configuration
├── prometheus.yml         # Prometheus configuration file
├── .github/
│   └── workflows/
│       └── docker-build-deploy.yml   # GitHub Actions workflow for building and deploying the app
```

## GitHub Actions CI/CD

The project uses **GitHub Actions** for continuous integration and deployment. Each push to the `main` branch triggers the following steps:
1. **Checkout Repository**.
2. **Login to Docker Hub**.
3. **Build and Push Docker Image** to Docker Hub.
4. **Deploy Docker Container** using Docker Compose.

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/docker-build-deploy.yml` to automate building and deploying the Docker images.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

