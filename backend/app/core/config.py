from pydantic import BaseSettings
import os
from dotenv import load_dotenv

# Load .env file explicitly to be safe, although BaseSettings with env_file deals with it too,
# but explicit loading helps ensures it's loaded before class instantiation if needed elsewhere.
# However, pydantic's BaseSettings handles .env file loading natively if configured.
# We will use pydantic's native capability.

class Settings(BaseSettings):
    DATABASE_URL: str

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
