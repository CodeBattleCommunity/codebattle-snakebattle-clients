from distutils.core import setup

setup(name='snakebattleclient',
      version='1.0',
      description='SnakeBattleClient game client',
      author='',
      author_email='',
      packages=['snakebattleclient'],
      install_requires=['websocket-client', 'click'],
      entry_points={'console_scripts': ['snakebattleclient=snakebattleclient.Main:main']})
