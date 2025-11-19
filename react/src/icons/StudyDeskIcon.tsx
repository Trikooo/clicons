import React from 'react';
import config from '../config';

interface StudyDeskIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StudyDeskIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/study-desk)
 * @see {@link https://clicons.dev/icon/study-desk}
 */
const StudyDeskIcon = React.forwardRef<SVGSVGElement, StudyDeskIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12H2'
    }
  ],
  [
    'path',
    {
      d: 'M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12'
    }
  ],
  [
    'path',
    {
      d: 'M4 12V22M20 12V22'
    }
  ],
  [
    'path',
    {
      d: 'M15.0401 2.59903C14.3088 1.90313 13.1232 1.90313 12.3919 2.59903C11.9784 2.99247 11.8198 3.4444 12.2767 3.87914L13.6927 5.22669C14.149 5.66087 14.6219 5.51714 15.0401 5.11912C15.7714 4.42322 15.7714 3.29494 15.0401 2.59903ZM15.0401 2.59903C15.5358 2.27324 16.0932 1.81764 16.7123 2.0763C17.0028 2.19766 17.2022 2.49474 17.6008 3.08889L19.0993 5.3223C19.6639 6.16376 19.9462 6.5845 19.9931 7.06138C20.0401 7.53825 19.8448 8.00129 19.4542 8.92735L18.1584 12'
    }
  ],
  [
    'path',
    {
      d: 'M4 12V7.5C4 6.37313 4.4506 6 5.5 6C6.5494 6 7 6.37313 7 7.5V12'
    }
  ],
  [
    'path',
    {
      d: 'M7 12V7.5C7 6.37313 7.4506 6 8.5 6C9.5494 6 10 6.37313 10 7.5V12'
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

StudyDeskIcon.displayName = 'StudyDeskIcon';
export default StudyDeskIcon;
