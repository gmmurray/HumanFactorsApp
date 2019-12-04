$('.ui.checkbox').checkbox();
$('.ui.radio.checkbox').checkbox();
$('select.dropdown').dropdown();
$('#basicTab').tab();
$('#positionTab').tab();
$('#educationTab').tab();
$('#employersTab').tab();
$('#referencesTab').tab();

// Basic Info form validation rules
$('#basicInfo')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            date: {
                identifier: 'date',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter today\'s date'
                    }
                ]
            },
            firstName: {
                identifier: 'firstName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your first name'
                    }
                ]
            },
            lastName: {
                identifier: 'lastName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your last name'
                    }
                ]
            },
            streetAddress: {
                identifier: 'streetAddress',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your address'
                    }
                ]
            },
            city: {
                identifier: 'city',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your city'
                    }
                ]
            },
            state: {
                identifier: 'state',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your state'
                    }
                ]
            },
            zipCode: {
                identifier: 'zipCode',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your zip code'
                    },
                    {
                        type: 'exactLength[5]',
                        prompt: 'Please enter a valid zip code'
                    },
                    {
                        type: 'integer',
                        prompt: 'Please enter a valid zip code'
                    }
                ]
            },
            emailAddress: {
                identifier: 'emailAddress',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your email address'
                    },
                    {
                        type: 'regExp[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/]',
                        prompt: 'Please enter a valid email address'
                    }
                ]
            },
            primaryPhoneNumber: {
                identifier: 'primaryPhoneNumber',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your phone number'
                    },
                    {
                        type: 'regExp[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im]',
                        prompt: 'Please enter a valid phone number in the format XXX-XXX-XXXX'
                    }
                ]
            },
            secondaryPhoneNumber: {
                identifier: 'secondaryPhoneNumber',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im]',
                        prompt: 'Please enter a valid phone number in the format XXX-XXX-XXXX'
                    }
                ]
            }
        }
    });

$('#basicNext').click(function () {
    var formIdentifier = $(this).attr('form');
    var form = '#' + formIdentifier + 'Info';
    var formTab = '#' + formIdentifier + 'Tab';
    // Validate fields for this section
    $(form).form('validate field', 'date');
    $(form).form('validate field', 'firstName');
    $(form).form('validate field', 'lastName');
    $(form).form('validate field', 'streetAddress');
    $(form).form('validate field', 'city');
    $(form).form('validate field', 'state');
    $(form).form('validate field', 'zipCode');
    $(form).form('validate field', 'emailAddress');
    $(form).form('validate field', 'primaryPhoneNumber');
    $(form).form('validate field', 'secondaryPhoneNumber');

    // If the entire form is valid, go to next tab
    if ($(form).form('is valid')) {
        $.tab('change tab', 'positionInfo');
        $(formTab).toggleClass('completed');
        $(formTab).toggleClass('active');
        $('#positionTab').toggleClass('disabled');
        $('#positionTab').toggleClass('active');
    }
});

$('#positionInfo')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            position: {
                identifier: 'position',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter the position you are applying for'
                    }
                ]
            },
            salary: {
                identifier: 'salary',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter your desired salary'
                    },
                    {
                        type: 'number',
                        prompt: 'Please enter a valid salary'
                    }
                ]
            },
            hoursAvailable: {
                identifier: 'hoursAvailable',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter the number of hours you can work'
                    }
                ]
            },

        }
    });

$('#positionNext').click(function () {
    var formIdentifier = $(this).attr('form');
    var form = '#' + formIdentifier + 'Info';
    var formTab = '#' + formIdentifier + 'Tab';
    // Validate fields for this section
    $(form).form('validate field', 'position');
    $(form).form('validate field', 'salary');
    $(form).form('validate field', 'hoursAvailable');

    // If the entire form is valid, go to next tab
    if ($(form).form('is valid')) {
        $.tab('change tab', 'educationInfo');
        $(formTab).toggleClass('completed');
        $(formTab).toggleClass('active');
        $('#educationTab').toggleClass('disabled');
        $('#educationTab').toggleClass('active');
    }
});

$('#educationInfo')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            educationLevel: {
                identifier: 'educationLevel',
                rules: [
                    {
                        type: 'minCount[1]',
                        prompt: 'Please enter your highest education level'
                    }
                ]
            }
        }
    });

$('#educationNext').click(function () {
    var formIdentifier = $(this).attr('form');
    var form = '#' + formIdentifier + 'Info';
    var formTab = '#' + formIdentifier + 'Tab';
    // Validate fields for this section
    $(form).form('validate field', 'educationLevel');

    // If the entire form is valid, go to next tab
    if ($(form).form('is valid')) {
        $.tab('change tab', 'employersInfo');
        $(formTab).toggleClass('completed');
        $(formTab).toggleClass('active');
        $('#employersTab').toggleClass('disabled');
        $('#employersTab').toggleClass('active');
    }
});


$('#employersInfo')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            employerPhone1: {
                identifier: 'employerPhone1',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im]',
                        prompt: 'Please enter a valid phone number in the format XXX-XXX-XXXX'
                    }
                ]
            },
            supervisorPhone1: {
                identifier: 'supervisorPhone1',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im]',
                        prompt: 'Please enter a valid phone number in the format XXX-XXX-XXXX'
                    }
                ]
            },
            supervisorEmail1: {
                identifier: 'supervisorEmail1',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/]',
                        prompt: 'Please enter a valid email address'
                    }
                ]
            }
        }
    });

$('#employersNext').click(function () {
    var formIdentifier = $(this).attr('form');
    var form = '#' + formIdentifier + 'Info';
    var formTab = '#' + formIdentifier + 'Tab';
    // Validate fields for this section
    $(form).form('validate field', 'employerPhone1');
    $(form).form('validate field', 'supervisorPhone1');
    $(form).form('validate field', 'supervisorEmail1');

    // If the entire form is valid, go to next tab
    if ($(form).form('is valid')) {
        $.tab('change tab', 'referencesInfo');
        $(formTab).toggleClass('completed');
        $(formTab).toggleClass('active');
        $('#referencesTab').toggleClass('disabled');
        $('#referencesTab').toggleClass('active');
    }
});

$('#referencesInfo')
    .form({
        on: 'blur',
        inline: true,
        fields: {
            referencePhone1: {
                identifier: 'referencePhone1',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im]',
                        prompt: 'Please enter a valid phone number in the format XXX-XXX-XXXX'
                    }
                ]
            },
            referenceEmail1: {
                identifier: 'referenceEmail1',
                optional: true,
                rules: [
                    {
                        type: 'regExp[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/]',
                        prompt: 'Please enter a valid email address'
                    }
                ]
            },
            agreeToC: {
                identifier: 'agreeToC',
                rules: [
                    {
                        type: 'checked',
                        prompt: 'You must agree to the terms and conditions'
                    }
                ]
            },
            signature: {
                identifier: 'signature',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'You must digitally sign this application'
                    }
                ]
            }
        }
    });

$('#submitForm').click(function () {
    var formIdentifier = $(this).attr('form');
    var form = '#' + formIdentifier + 'Info';
    var formTab = '#' + formIdentifier + 'Tab';
    // Validate fields for this section
    $(form).form('validate field', 'referencePhone1');
    $(form).form('validate field', 'referenceEmail1');
    $(form).form('validate field', 'agreeToC');
    $(form).form('validate field', 'signature');

    // If the entire form is valid, go to next tab
    if ($(form).form('is valid')) {
        alert('Thank you for your responses. Your application has been submitted and we will get back to you soon.');
        window.location.replace('index.html');
    }
});

$('#applicationForm').submit(function (e) {
    e.preventDefault();
    $('#referencesInfo').form('validate field', 'referencePhone1');
    $('#referencesInfo').form('validate field', 'referenceEmail1');
    $('#referencesInfo').form('validate field', 'agreeToC');
    $('#referencesInfo').form('validate field', 'signature');

    if ($('#referencesInfo').form('is valid')) {
        alert('Thank you for your responses. Your application has been submitted and we will get back to you soon.');
        window.location.replace('index.html');
    }
});

// Give warning on refresh of page to prevent lost data
window.onbeforeunload = function () {
    return "Are you sure you want to leave? Your changes may not be saved";
}

$('#tocModal').click(function () {
    $('.ui.modal').modal('show');
});

$('#agreeToTerms').click(function(){
    $('#referencesInfo').form('set value', 'agreeToC', true);
});