# Use official Python base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements and install them
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of the app
COPY . /app

# Set entrypoint to your script
ENTRYPOINT ["python", "translator.py"]
