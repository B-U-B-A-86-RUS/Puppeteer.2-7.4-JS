Feature: Service for Movie tickets order
        
        Scenario: Zveropolis pozitive
        Given user is on page- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        When The user selects the desired movie
        When The user chooses a location
        When The user has booked tickets
        When The user has confirmed the booking of tickets
        Then Is the QR code of the reservation visible1
    
    
        Scenario: Mickey Mouse positive
        Given user is on page2- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day2
        When The user selects the desired movie2
        When The user chooses a location2
        When The user has booked tickets2
        When The user has confirmed the booking of tickets2
        Then Is the QR code of the reservation visible2
    
        Scenario: Mickey Mouse negative
        Given user is on page-3- "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day-3
        When The user selects the desired movie-3
        When The user selects the occupied place-3
        When The user has booked tickets-3
        When The user has confirmed the booking of tickets-3
        Then Is the QR code of the reservation visible-3