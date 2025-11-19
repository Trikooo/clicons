import React from 'react';
import config from '../config';

interface PeerToPeerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PeerToPeerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/peer-to-peer)
 * @see {@link https://clicons.dev/icon/peer-to-peer}
 */
const PeerToPeerIcon = React.forwardRef<SVGSVGElement, PeerToPeerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 8H7C8.41421 8 9.12132 8 9.56066 7.56066C10 7.12132 10 6.41421 10 5C10 3.58579 10 2.87868 9.56066 2.43934C9.12132 2 8.41421 2 7 2H5C3.58579 2 2.87868 2 2.43934 2.43934C2 2.87868 2 3.58579 2 5C2 6.41421 2 7.12132 2.43934 7.56066C2.87868 8 3.58579 8 5 8H6ZM6 8V10.5M6 10.5H7.5M6 10.5H4.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 5C15.8284 5 17.2426 5 18.1213 5.87868C19 6.75736 19 8.17157 19 11L17 10'
    }
  ],
  [
    'path',
    {
      d: 'M11 19C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L7 14'
    }
  ],
  [
    'path',
    {
      d: 'M18 19.5H19C20.4142 19.5 21.1213 19.5 21.5607 19.0607C22 18.6213 22 17.9142 22 16.5C22 15.0858 22 14.3787 21.5607 13.9393C21.1213 13.5 20.4142 13.5 19 13.5H17C15.5858 13.5 14.8787 13.5 14.4393 13.9393C14 14.3787 14 15.0858 14 16.5C14 17.9142 14 18.6213 14.4393 19.0607C14.8787 19.5 15.5858 19.5 17 19.5H18ZM18 19.5V22M18 22H19.5M18 22H16.5'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

PeerToPeerIcon.displayName = 'PeerToPeerIcon';
export default PeerToPeerIcon;
