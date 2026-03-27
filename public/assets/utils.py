import logging
import json
import os
import uuid

from payment_processor import config

def generate_invoice_id():
    return str(uuid.uuid4())

def load_config():
    try:
        with open(config.CONFIG_FILE, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError:
        logging.error("Invalid JSON in config file")
        return {}

def save_config(config_dict):
    with open(config.CONFIG_FILE, 'w') as f:
        json.dump(config_dict, f, indent=4)

def get_env_var(var_name, default=None):
    return os.getenv(var_name, default)

def validate_api_key(api_key):
    if not api_key:
        raise ValueError("API key is required")
    if len(api_key) != 32:
        raise ValueError("Invalid API key length")
    try:
        int(api_key, 16)
    except ValueError:
        raise ValueError("Invalid API key format")