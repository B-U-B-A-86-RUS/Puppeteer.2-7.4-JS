Feature: Service for Movie tickets order
        Scenario: Zveropolis pozitive
        Given user is on page1- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        When The user selects the desired movie
        When The user chooses a location
        When The user has booked tickets
        When The user has confirmed the booking of tickets
        Then Is the QR code of the reservation visible1
    
        Scenario: Mickey Mouse positive
        Given user is on page2- "http://qamid.tmweb.ru/client/index.php"
        Then Is the QR code of the reservation visible2
    
        Scenario: Mickey Mouse negative
        Given user is on page3- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the occupied place
        Then Is the QR code of the reservation visible neg