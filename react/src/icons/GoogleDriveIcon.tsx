import React from 'react';
import config from '../config';

interface GoogleDriveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GoogleDriveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/google-drive)
 * @see {@link https://clicons.dev/icon/google-drive}
 */
const GoogleDriveIcon = React.forwardRef<SVGSVGElement, GoogleDriveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.0165 19.4118L21.4236 16.8293C21.811 16.1181 22.0048 15.7625 21.9999 15.3776C21.995 14.9927 21.7923 14.642 21.3869 13.9404L15.9448 4.52296C15.5155 3.78003 15.3009 3.40856 14.9431 3.20428C14.5852 3 14.1493 3 13.2773 3H10.7227C9.85074 3 9.41475 3 9.05694 3.20428C8.69913 3.40856 8.48447 3.78003 8.05515 4.52296L2.61306 13.9404C2.20767 14.642 2.00497 14.9927 2.00009 15.3776C1.99521 15.7625 2.18895 16.1181 2.57643 16.8293L3.98351 19.4118C4.40512 20.1856 4.61592 20.5725 4.97988 20.7862C5.34384 21 5.7918 21 6.68772 21H17.3123C18.2082 21 18.6562 21 19.0201 20.7862C19.3841 20.5725 19.5949 20.1856 20.0165 19.4118Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 4L16 15'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 20.5L12 9'
    }
  ],
  [
    'path',
    {
      d: 'M21 15H9'
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

GoogleDriveIcon.displayName = 'GoogleDriveIcon';
export default GoogleDriveIcon;
