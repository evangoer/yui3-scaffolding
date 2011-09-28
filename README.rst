YUI Scaffolding
===============

A set of pre-packaged starter files for YUI module developers. For those who are 
new to YUI, the distinction is: 

* YUI module *users*: People who are wiring YUI modules into a web page: adding an 
  animation effect, rendering a canned widget. People who are writing small amounts 
  of glue code inside a ``YUI().use()``.
* YUI module *developers*: People who are building widgets and other chunks for 
  easy reuse. People who are writing most of their code inside ``YUI.add()``.

YUI Scaffolding is for people in the second category. The goal is to bootstrap your
way to writing YUI modules _without_ forcing you to mess around with the powerful, 
but also finicky and poorly documented YUI Builder.

Instead, you wrap your code in a hand-authored ``YUI.add()`` and just ping pong 
back and forth between adding module code, writing tests, and refreshing the 
associated test runner HTML file, without any intervening build step. As your project 
matures, you can always migrate it over to YUI Builder. Or not. 

Template Projects
-----------------

There are three template projects. They are configured to run off the local 
filesystem, without assuming a web server or combo loader.

*example-basic*
    A dead-simple example object with a single ``hello()`` method and a single
    working test.

*example-component*
    An example object derived from ``Y.Base``, with a single attribute, a single
    ```hello()``` method, and a single working test.

*example-widget*
    An example object derived from ``Y.Widget``, with a single attribute, a 
    very minimal ``renderUI()``/``syncUI()`` implementation, and a single working
    test. 
    
    The widget also includes a CSS file delivered by setting ``skinnable: true``. 
    This is where some serious hackery ensues, since YUI skin conventions 
    assume you are using the builder and have deployed to a combo loader. Here
    the goal is to allow you to noodle away on your widget's look and feel, and 
    decide later on whether you want to build and load assets the way the core 
    YUI widgets do, or some other way.