import React from 'react';
import config from '../config';

interface PeerToPeer2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PeerToPeer2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/peer-to-peer2)
 * @see {@link https://clicons.dev/icon/peer-to-peer2}
 */
const PeerToPeer2Icon = React.forwardRef<SVGSVGElement, PeerToPeer2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.52001 3.00001C4.69617 3.00001 4.02832 3.6718 4.02832 4.50049C4.02832 5.32918 4.69617 6.00097 5.52001 6.00097C6.34385 6.00097 7.0117 5.32918 7.0117 4.50049C7.0117 3.6718 6.34385 3.00001 5.52001 3.00001Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.4821 21.0002H16.7038C16.4972 21.0002 16.2898 20.97 16.1001 20.8852C15.4826 20.6091 15.1693 20.2446 15.0233 20.0165C14.9402 19.8867 14.9521 19.7215 15.0422 19.5969C15.7576 18.6081 17.4164 18.0108 18.4821 18.0108M18.4852 21.0002H20.2635C20.4701 21.0002 20.6775 20.97 20.8672 20.8852C21.4847 20.6091 21.798 20.2446 21.944 20.0165C22.0271 19.8867 22.0153 19.7215 21.9251 19.5969C21.2097 18.6081 19.5509 18.0108 18.4852 18.0108'
    }
  ],
  [
    'path',
    {
      d: 'M5.51485 11.4924H3.73649C3.52995 11.4924 3.32254 11.4622 3.13284 11.3774C2.51533 11.1013 2.20203 10.7367 2.05602 10.5087C1.97294 10.3789 1.98477 10.2136 2.07491 10.0891C2.79035 9.10026 4.44914 8.50299 5.51485 8.50294M5.51789 11.4924H7.29625C7.50279 11.4924 7.7102 11.4622 7.8999 11.3774C8.51741 11.1013 8.83071 10.7367 8.97672 10.5087C9.0598 10.3789 9.04797 10.2136 8.95783 10.0891C8.24239 9.10026 6.5836 8.50299 5.51789 8.50294'
    }
  ],
  [
    'path',
    {
      d: 'M11.4868 4.00001C14.2995 4.00001 16.7004 4.00001 17.5742 4.87897C18.448 5.75793 18.448 6.67243 18.448 9.50177L16.4591 8.50145'
    }
  ],
  [
    'path',
    {
      d: 'M11.9842 20.0057C9.1714 20.0057 6.77057 20.0057 5.89676 19.1267C5.02295 18.2477 5.02295 17.3332 5.02295 14.5039L7.01187 15.5042'
    }
  ],
  [
    'path',
    {
      d: 'M18.4477 12.5029C17.6239 12.5029 16.9561 13.1748 16.9561 14.0034C16.9561 14.8321 17.6239 15.5039 18.4477 15.5039C19.2716 15.5039 19.9394 14.8321 19.9394 14.0034C19.9394 13.1748 19.2716 12.5029 18.4477 12.5029Z'
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

PeerToPeer2Icon.displayName = 'PeerToPeer2Icon';
export default PeerToPeer2Icon;
