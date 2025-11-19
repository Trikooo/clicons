import React from 'react';
import config from '../config';

interface AiSecurityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiSecurityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-security)
 * @see {@link https://clicons.dev/icon/ai-security}
 */
const AiSecurityIcon = React.forwardRef<SVGSVGElement, AiSecurityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.461 6.50098V8.48M6.99998 10.0014H9.03668M14.9633 10.0014H17M14.9633 12.9746H17M6.99998 12.9746H9.03668M10.461 14.5202V16.4992M13.464 14.5202V16.4992M13.4533 6.50098V8.48M10.0292 14.4685H13.9707C14.5189 14.4685 14.9633 14.0208 14.9633 13.4685V9.48C14.9633 8.92771 14.5189 8.48 13.9707 8.48H10.0292C9.48106 8.48 9.03668 8.92771 9.03668 9.48V13.4685C9.03668 14.0208 9.48106 14.4685 10.0292 14.4685Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2021 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.4239 2 12 2C11.576 2 10.9766 2.2661 9.7777 2.79829C8.89837 3.18863 7.79782 3.61619 6.54931 3.9711C4.72191 4.49056 3.80821 4.75029 3.4041 5.28529C2.99998 5.82028 2.99998 6.64029 2.99998 8.28029V11.1833C2.99998 16.8085 8.06276 20.1835 10.5939 21.5194C11.201 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z'
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

AiSecurityIcon.displayName = 'AiSecurityIcon';
export default AiSecurityIcon;
