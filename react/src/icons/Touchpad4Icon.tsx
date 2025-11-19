import React from 'react';
import config from '../config';

interface Touchpad4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Touchpad4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touchpad4)
 * @see {@link https://clicons.dev/icon/touchpad4}
 */
const Touchpad4Icon = React.forwardRef<SVGSVGElement, Touchpad4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 13.579V13.7425M22 13.7425C22 12.9192 21.4003 12.2166 20.582 12.0812L19.4545 11.8947V12.7368M22 13.7425V15.8246C22 17.6548 22 18.5699 21.7191 19.2984C21.2896 20.4124 20.4054 21.2927 19.2865 21.7203C18.5547 22 17.6356 22 15.7973 22C14.8332 22 14.3512 22 13.9026 21.9018C13.2181 21.752 12.5818 21.4353 12.0508 20.98C11.7028 20.6816 11.4135 20.2977 10.8351 19.5298L8.28626 16.1463C7.89462 15.6264 7.90588 14.9086 8.31364 14.4011C8.84655 13.7379 9.84017 13.6831 10.4434 14.2837L11.7333 15.6524V7.41176C11.7333 6.63207 12.3601 6 13.1333 6C13.9065 6 14.5333 6.63207 14.5333 7.41176V10.2105M14.5333 10.2105H15.2121C16.1493 10.2105 16.9091 10.9646 16.9091 11.8947M14.5333 10.2105V12.7368M16.9091 11.8947V12.7368M16.9091 11.8947V11.0526H17.7576C18.6948 11.0526 19.4545 11.8067 19.4545 12.7368M19.4545 12.7368V13.579'
    }
  ],
  [
    'path',
    {
      d: 'M22 8.01013C21.9641 5.52637 21.7801 4.11823 20.8366 3.17355C19.6645 2 17.7781 2 14.0052 2H10.0035C6.2306 2 4.34416 2 3.17208 3.17355C2 4.3471 2 6.2359 2 10.0135V12.0169C2 13.8838 2 14.8172 2.30461 15.5536C2.71077 16.5353 3.4898 17.3153 4.47034 17.722C4.87798 17.8911 5.34612 17.9664 6 18'
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

Touchpad4Icon.displayName = 'Touchpad4Icon';
export default Touchpad4Icon;
