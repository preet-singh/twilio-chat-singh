const twiliochat = (function(){
    const tc = {};

    const GENERAL_CHANNEL_UNIQUE_NAME = 'general';
    const GENERAL_CHANNEL_NAME = 'General Channel';
    const MESSAGES_HISTORY_LIMIT = 50;

    const $channelList;
    const $inputText;
    const $usernameInput;
    const $statusRow;
    const $connectPanel;
    const $newChannelInputRow;
    const $newChannelInput;
    const $typingRow;
    const $typingPlaceholder;

    $(document).ready(function() {
        tc.init();
    });

    tc.init = function() {
        tc.$messageList = $('#message-list');
        $channelList = $('#channel-list');
        $inputText = $('#input-text');
        $usernameInput = $('#username-input');
        $statusRow = $('#status-row');
        $connectPanel = $('#connect-panel');
        $newChannelInputRow = $('#new-channel-input-row');
        $newChannelInput = $('#new-channel-input');
        $typingRow = $('#typing-row');
        $typingPlaceholder = $('#typing-placeholder');
        $usernameInput.focus();
        $usernameInput.on('keypress', handleUsernameInputKeypress);
        $inputText.on('keypress', handleInputTextKeypress);
        $newChannelInput.on('keypress', tc.handleNewChannelInputKeypress);
        $('#connect-image').on('click', connectClientWithUsername);
        $('#add-channel-image').on('click', showAddChannelInput);
        $('#leave-span').on('click', disconnectClient);
        $('#delete-channel-span').on('click', deleteCurrentChannel);
    };

})();