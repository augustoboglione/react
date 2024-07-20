const Clock = () => (
    <svg id='clock' viewBox='-100 -100 200 200'>
        <defs>
            <path id='thin-line' d='M 0 -90 V -88'/>
            <path id='thick-line' d='M 0 -90 V -86'/>
            <g id='line-group'>
                <use href='#thick-line'/>
                <use href='#thin-line' transform='rotate(6)'/>
                <use href='#thin-line' transform='rotate(12)'/>
                <use href='#thin-line' transform='rotate(18)'/>
                <use href='#thin-line' transform='rotate(24)'/>
            </g>
        </defs>
        <use href='#line-group'/>
        <use href='#line-group' transform='rotate(30)'/>
        <use href='#line-group' transform='rotate(60)'/>
        <use href='#line-group' transform='rotate(90)'/>
        <use href='#line-group' transform='rotate(120)'/>
        <use href='#line-group' transform='rotate(150)'/>
        <use href='#line-group' transform='rotate(180)'/>
        <use href='#line-group' transform='rotate(210)'/>
        <use href='#line-group' transform='rotate(240)'/>
        <use href='#line-group' transform='rotate(270)'/>
        <use href='#line-group' transform='rotate(300)'/>
        <use href='#line-group' transform='rotate(330)'/>
        <path id='hours-hand' d='M 0 10 a 5 5 0 0 0 5 5 a 5 5 0 0 1 -10 0 a 5 5 0 0 0 5 -5 V -30 a 5 5 0 0 0 5 -5 C 5 -40 0 -40 0 -50 C 0 -40 -5 -40 -5 -35 a 5 5 0 0 0 5 5'/>
        <path id='minutes-hand' d='M 0 20 a 5 5 0 0 0 5 5 a 5 5 0 0 1 -10 0 a 5 5 0 0 0 5 -5 V -40 a 5 5 0 0 1 -5 -5 C -5 -50 0 -50 0 -70 C 0 -50 5 -50 5 -45 a 5 5 0 0 1 -5 5'/>
        <path id='seconds-hand' d='M 0 15 a 5 5 0 0 0 5 5 a 10 10 0 0 1 -10 0 a 5 5 0 0 0 5 -5 V 5 A 5 5 0 0 0 0 -5 A 5 5 0 0 0 0 5 M 0 -5 V -75'/>
        <circle r='4.5'/>
    </svg>
)

export default Clock