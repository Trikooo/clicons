import React from 'react';
import config from '../config';

interface ZeppelinIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ZeppelinIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/zeppelin)
 * @see {@link https://clicons.dev/icon/zeppelin}
 */
const ZeppelinIcon = React.forwardRef<SVGSVGElement, ZeppelinIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 15.9971L18.6938 17.3197C18.3654 18.7379 18.2012 19.4471 17.6938 19.7938C17.1864 20.1406 16.5226 19.9972 15.195 19.7105L14.4288 19.545C13.7218 19.3924 13.3683 19.316 13.0668 19.1179C12.7654 18.9198 12.5402 18.6158 12.0898 18.0079L11 16.537'
    }
  ],
  [
    'path',
    {
      d: 'M2 10.9971C2 13.9971 10 16.9971 15 16.9971C19 16.9971 22 14.3108 22 10.9971C22 7.68336 19 4.99707 15 4.99707C10 4.99707 2 7.99707 2 10.9971Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 10.9971H5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 5.99713C6.74487 5.15021 5.54147 3.85496 4.36683 4.01304C4.02163 4.05949 3.68109 4.25046 3 4.6324L4 7.99706'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 15.997C6.74487 16.8439 5.54147 18.1392 4.36683 17.9811C4.02163 17.9347 3.68109 17.7437 3 17.3617L4 13.9971'
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

ZeppelinIcon.displayName = 'ZeppelinIcon';
export default ZeppelinIcon;
