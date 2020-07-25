# HobbyHacksSubmission

Make sure you have Python 3.7, Flask installed:

  pip install Flask

  pip install spotipy --upgrade


Export client and secret key:

  export SPOTIPY_CLIENT_ID='ed53235cbbef4440a58b5fe8b947c0bd'

  export SPOTIPY_CLIENT_SECRET='0cb21e8768c44b80bbe34f99f72424bc'

  export SPOTIPY_REDIRECT_URI='http://127.0.0.1:5000/oauth/callback'


Run locally:

  export FLASK_APP=spotify-app

  export FLASK_ENV=development

  flask run
