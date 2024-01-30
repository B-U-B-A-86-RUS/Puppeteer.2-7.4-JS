Feature: Service for Movie tickets order
    
    Feature Description:
        Scenario: Zveropolis pozitive
        Given user is on page- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        When The user selects the desired movie
        When The user chooses a location
        When The user has booked tickets
        When The user has confirmed the booking of tickets
        Then Is the QR code of the reservation visible
    
    Feature Description:
        Scenario: Mickey Mouse positive
        Given user is on page- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        When The user selects the desired movie
        When The user chooses a location
        When The user has booked tickets
        When The user has confirmed the booking of tickets
        Then Is the QR code of the reservation visible
    
    Feature Description:
        Scenario: Mickey Mouse negative
        Given user is on page- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        When The user selects the desired movie
        When The user selects the occupied place
        When The user has booked tickets
        When The user has confirmed the booking of tickets
        Then Is the QR code of the reservation visible