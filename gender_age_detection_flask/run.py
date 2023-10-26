from factory import create_app

import os
import configparser


config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))


if __name__ == "__main__":
    app = create_app()
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = "mongodb+srv://vinulmanjitha98:lbvDz6KdHlqjs7qe@cluster0.zf96je9.mongodb.net/"

    app.run()
