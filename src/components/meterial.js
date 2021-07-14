import React from 'react';
import './meterial.css';

function Meterial({ compiler, app, name }) {
    return (
        <div className="pg__meterials">
            <div className="pg__meterials__body">
                <div className="pg__meterials__compiler">
                    <a target="_blank" href={compiler}>
                        <p>
                            Online Compiler <i className="fal fa-external-link"> </i>
                        </p>
                    </a>
                </div>
                <div className="pg__meterials__Setup">
                    <a target="_blank" href={app}>
                        <p>
                            {name} <i className="fal fa-external-link"> </i>{' '}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Meterial;
